#!/usr/bin/env bash

# Resolve project root directory
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PID_FILE="$SCRIPT_DIR/.server.pid"
PORT=8000
STOPPED=0

# Check PID file first
if [ -f "$PID_FILE" ]; then
    PID=$(cat "$PID_FILE")
    if ps -p "$PID" > /dev/null 2>&1; then
        echo "🛑 Stopping server (PID: $PID)..."
        kill "$PID" 2>/dev/null
        # Wait up to 5 seconds for graceful shutdown
        for i in {1..5}; do
            if ! ps -p "$PID" > /dev/null 2>&1; then
                break
            fi
            sleep 1
        done
        # Force kill if still running
        if ps -p "$PID" > /dev/null 2>&1; then
            kill -9 "$PID" 2>/dev/null
        fi
        STOPPED=1
    fi
    rm -f "$PID_FILE"
fi

# Also check if any remaining process is listening on port 8000
PORT_PID=$(lsof -ti :$PORT 2>/dev/null)
if [ -n "$PORT_PID" ]; then
    echo "🛑 Terminating remaining process on port $PORT (PID: $PORT_PID)..."
    kill -9 "$PORT_PID" 2>/dev/null
    STOPPED=1
fi

if [ "$STOPPED" -eq 1 ]; then
    echo "✅ App stopped successfully."
else
    echo "ℹ️  App was not running."
fi
