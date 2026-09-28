@echo off
echo ====================================================
echo Starting Restaurant Pro Shop Demo Website...
echo ====================================================
start "" "http://localhost:5173"
call npm run dev -- --port 5173
pause
