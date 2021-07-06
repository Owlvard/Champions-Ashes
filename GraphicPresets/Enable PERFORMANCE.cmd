@ECHO OFF
ECHO.
ECHO  _____     _              _____         ___                               
ECHO ^|  _  ^|___^| ^|_ ___ ___   ^|  _  ^|___ ___^|  _^|___ ___ _____ ___ ___ ___ ___ 
ECHO ^|     ^|_ -^|   ^| -_^|_ -^|  ^|   __^| -_^|  _^|  _^| . ^|  _^|     ^| .'^|   ^|  _^| -_^|
ECHO ^|__^|__^|___^|_^|_^|___^|___^|  ^|__^|  ^|___^|_^| ^|_^| ^|___^|_^| ^|_^|_^|_^|__,^|_^|_^|___^|___^|
ECHO.
ECHO Improved visuals with minimal performance loss
ECHO.
ECHO Initiating Preset...
robocopy ".\Performance\map" "..\_ashes\map" "*.tpf*" "*.txt*" "*.btl*" "*.msb*" /e /z /mir >nul 2>nul
robocopy ".\Performance\param\drawparam" "..\_ashes\param\drawparam" "*.gparam*" /e /z /mir >nul 2>nul
ECHO READY, Enjoy Ashes!
PAUSE