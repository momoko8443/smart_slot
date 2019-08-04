#!/bin/bash
echo "starting camera with py"
cd /home/pi/Workspaces/python_area/pistreaming
nohup python3 server.py & echo $! > ./process.pid
echo "done!"

