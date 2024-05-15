use std::fs::OpenOptions;
use std::io::Write;
use std::path::Path;
use std::{fs::File, io::BufReader};

use anyhow::Result;
use ical::generator::*;

use ical::{parser::ical::component::IcalAlarm, property::Property};

pub fn add_events(input_path: impl AsRef<Path>, output_path: impl AsRef<Path>) -> Result<()> {
    let in_file = File::open(input_path)?;
    let mut out_file = OpenOptions::new()
        .create(true)
        .truncate(true)
        .write(true)
        .open(output_path)?;
    let buf = BufReader::new(in_file);
    let reader = ical::IcalParser::new(buf);
    for line in reader {
        let mut cal = line?;
        for event in cal.events.iter_mut() {
            event.alarms.push(IcalAlarm {
                properties: vec![
                    Property {
                        name: "ACTION".to_string(),
                        params: None,
                        value: Some("DISPLAY".to_string()),
                    },
                    Property {
                        name: "TRIGGER".to_string(),
                        params: Some(vec![("RELATED".to_string(), vec!["START".to_string()])]),
                        value: Some("-PT6H".to_string()),
                    },
                ],
            });
        }
        out_file.write_all(cal.generate().as_bytes())?;
    }
    Ok(())
}
