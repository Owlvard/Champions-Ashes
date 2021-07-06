@ECHO OFF
echo     ___         __                 _______     __     ___ __       
echo    /   ^|  _____/ /_  ___  _____   / ____(_)___/ /__  / (_) /___  __
echo   / /^| ^| / ___/ __ \/ _ \/ ___/  / /_  / / __  / _ \/ / / __/ / / /
echo  / ___ ^|(__  ) / / /  __(__  )  / __/ / / /_/ /  __/ / / /_/ /_/ / 
echo /_/  ^|_/____/_/ /_/\___/____/  /_/   /_/\__,_/\___/_/_/\__/\__, /  
echo                                                           /____/   
echo.
ECHO [EXPERIMENTAL, SOME GLITCHES MIGHT OCCUR]
ECHO Amazing visuals or burning PC, either way you will see the light!
ECHO.
ECHO Initiating Preset...
robocopy ".\Fidelity\map" "..\_ashes\map" "*.tpf*" "*.txt*" "*.btl*" "*.msb*" /e /z /mir >nul 2>nul
robocopy ".\Fidelity\param\drawparam" "..\_ashes\param\drawparam" "*.gparam*" /e /z /mir >nul 2>nul
ECHO READY, Enjoy Ashes!
PAUSE