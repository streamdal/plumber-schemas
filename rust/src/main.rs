use pb_jelly_gen::GenProtos;

fn main() -> std::io::Result<()> {
    GenProtos::builder()
        .out_path("../build/rust")
        .src_path("../protos")
        .include_path("../protos")
        .include_path("../protos/args")
        .include_path("../protos/common")
        .include_path("../protos/encoding")
        .include_path("../protos/opts")
        .include_path("../protos/records")
        .cleanup_out_path(true)
        .gen_protos();

    Ok(())
}
