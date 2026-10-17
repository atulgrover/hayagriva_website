#!/usr/bin/env bash

# Resolve project root directory
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PID_FILE="$SCRIPT_DIR/.server.pid"
LOG_FILE="$SCRIPT_DIR/server.log"
PORT=5050

# Check if server is already running via PID file
if [ -f "$PID_FILE" ]; then
    PID=$(cat "$PID_FILE")
    if ps -p "$PID" > /dev/null 2>&1; then
        echo "⚠️  App is already running (PID: $PID) at http://localhost:$PORT"
        exit 0
    else
        rm -f "$PID_FILE"
    fi
fi

# Check if port 8000 is already in use by another process
PORT_PID=$(lsof -ti :$PORT 2>/dev/null)
if [ -n "$PORT_PID" ]; then
    echo "⚠️  Port $PORT is already in use by process PID $PORT_PID."
    echo "   Run ./stop.sh or kill PID $PORT_PID first."
    exit 1
fi

echo "🚀 Starting AgenticProfessionals dev server on port $PORT..."
nohup python3 "$SCRIPT_DIR/serve.py" > "$LOG_FILE" 2>&1 &
SERVER_PID=$!
echo "$SERVER_PID" > "$PID_FILE"

# Wait up to 1 second for server to initialize
sleep 1
if ps -p "$SERVER_PID" > /dev/null 2>&1; then
    echo "✅ App started successfully!"
    echo "   • URL:  http://localhost:$PORT"
    echo "   • PID:  $SERVER_PID"
    echo "   • Logs: $LOG_FILE"
    echo "   • To stop: ./stop.sh"
else
    echo "❌ Failed to start the server. Check logs in $LOG_FILE:"
    cat "$LOG_FILE"
    rm -f "$PID_FILE"
    exit 1
fi
