@echo off
chcp 65001 >nul
setlocal enabledelayedexpansion

echo ========== 主脚本开始执行 ==========
echo.

:: 调用todo目录下的批处理文件
call todo/to-one.bat
if errorlevel 1 (echo 合并失败 & pause & exit /b 1)

call todo/to-in.bat
if errorlevel 1 (echo 替换失败 & pause & exit /b 1)

:: 删除根目录下生成的临时文件
del "all-apps.ts"

echo.
echo ========== ✅ 全部执行完成 ==========
echo.
echo 最终文件：new.json5
echo 请手动修改-版本号 +1
echo.
pause
exit
