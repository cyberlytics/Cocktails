# Web-Anwendungsentwicklung Team Blau

# Installieren von Abhängigkeiten
Um das Programm lokal zu starten, muss Node.js und npm installiert sein.
Diese können beispielsweise von dieser Webseite heruntergeladen werden: https://nodejs.org/en/download/
Hierbei ist die LTS Version vorzuziehen.

Nach erfolgreicher Installation muss noch „Install_dependencies.bat" ausgeführt werden, um alle nötigen Pakete zu installieren.

Ist alles fehlerfrei durchgelaufen, kann nun das Programm lokal mit „Run.bat“ gestartet werden.

# Testumgebung
Um das Frontend fehlerfrei zu testen ist es nötig, dass die Backend-Anwendung in Betrieb ist. Dafür im Ordner "*/backend" den Befehl "npm start" ausführen.

Es existieren getrennte Tests für Frontend und Backend. Die Tests können mit "npm test" im Ordner "*/frontend" oder "*/backend" jeweils getrennt gestartet werden. Mit dem Befehl "npm run test a -- --coverage" kann zusätzlich die Code-Coverage angezeigt werden.
