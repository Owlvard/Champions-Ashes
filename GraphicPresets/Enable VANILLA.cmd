@ECHO OFF
echo  __ __   ____  ____   ____  _      _       ____ 
echo ^|  ^|  ^| /    ^|^|    \ ^|    ^|^| ^|    ^| ^|     /    ^|
echo ^|  ^|  ^|^|  o  ^|^|  _  ^| ^|  ^| ^| ^|    ^| ^|    ^|  o  ^|
echo ^|  ^|  ^|^|     ^|^|  ^|  ^| ^|  ^| ^| ^|___ ^| ^|___ ^|     ^|
echo ^|  :  ^|^|  _  ^|^|  ^|  ^| ^|  ^| ^|     ^|^|     ^|^|  _  ^|
echo  \   / ^|  ^|  ^|^|  ^|  ^| ^|  ^| ^|     ^|^|     ^|^|  ^|  ^|
echo   \_/  ^|__^|__^|^|__^|__^|^|____^|^|_____^|^|_____^|^|__^|__^|
echo.
ECHO unchanged visuals
ECHO.
ECHO Initiating Preset...
robocopy ".\Vanilla\map" "..\_ashes\map" "*.tpf*" "*.txt*" "*.btl*" "*.msb*" /e /z /mir >nul 2>nul
robocopy ".\Vanilla\param\drawparam" "..\_ashes\param\drawparam" "*.gparam*" /e /z /mir >nul 2>nul
ECHO READY, Enjoy Ashes!
PAUSE