# icaltool

## Overview

**iCalTool** is a command-line interface (CLI) tool written in Rust for processing iCalendar (iCal or .ics) files. Currently it adds a reminder to all events in a single .ics file. This is also a rust rewrite. You can find the old code in the legacy-ts branch.

For the most part this is a personal project for my specific use case.

## Features

- **Bulk add reminder to events**: Adds reminders to all events in the specified .ics file.

## Installation

### Download standalone binary from Github

Binaries for windows and linux can be downloaded from the github releases.

### Build from Source

1. Clone the repository:

   ```sh
   git clone https://github.com/yourusername/icaltool.git
   cd icaltool
   ```

2. Build the project:

   ```sh
   cargo build --release
   ```

3. The binary will be located in the `target/release` directory.

### Using Cargo

If you have Cargo installed, you can install iCalTool directly from the source:

```sh
cargo install --path .
```

## Usage

### Basic Commands

- **Help**: Display the help message and available commands.

  ```sh
  icaltool --help
  ```

- **Parse an iCal File**: Add reminders to all events in the provided .ics file

  ```sh
  icaltool <path-to-ics-file>
  ```

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue.

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Create a new Pull Request.

## Contact

For questions or suggestions, please open an issue in the GitHub repository or contact the maintainer at [jannikac@mailbox.org](mailto:jannikac@mailbox.org).
