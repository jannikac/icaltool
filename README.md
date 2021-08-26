# IcalTools

Tools for bulk editing ICALs. 

## Description

I created this tool to add Reminders to a collection of events. This Project is called IcalTools because you can extend it to include more functionality.
This tool uses ical.js.

## Getting Started

### Installing
Clone repository
```
git clone https://github.com/jannikac/IcalTools.git
```
Install dependencies
```
npm install
```
Compile with typescript
```
tsc
```
Install as global command
```
sudo npm install -g
```

### Usage
Run the program with
```
icaltool
```
Show help message
```
icaltool --help
```
Specify input .ics file
```
icaltool -f /home/user/test.ics
```
Speicfy output location (default: same directory out.ics)
```
icaltool -f /home/user/test.ics -o /home/user/myoutput.ics
```

## Help

Any advise for common problems or issues.
```
icaltool --help
```

## Authors

Contributors names and contact info

jannikac - jannikac@mailbox.org


