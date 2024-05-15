use std::path::PathBuf;

use anyhow::{Context, Result};
use clap::Parser;
use icaltool::add_events;

#[derive(Parser)]
#[command(version, about, long_about = None)]
struct Cli {
    inputfile: PathBuf,

    #[arg(short, long)]
    outputfile: Option<PathBuf>,
}

fn main() -> Result<()> {
    let cli = Cli::parse();
    let input_path = PathBuf::from(&cli.inputfile)
        .canonicalize()
        .context(format!(
            "Could not resolve path '{}'",
            &cli.inputfile.display()
        ))?;
    let mut default_output_file_name = input_path.file_stem().unwrap().to_owned();
    default_output_file_name.push("_converted.ics");
    let output_path = cli
        .outputfile
        .unwrap_or(input_path.parent().unwrap().join(default_output_file_name));

    add_events(input_path, output_path)?;
    println!("success!");
    Ok(())
}
