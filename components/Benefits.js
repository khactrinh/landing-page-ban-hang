export default function Benefits() {
  const benefits = [
    { title: "Tiết kiệm thời gian", desc: "Chỉ 5 phút để bắt đầu." },
    { title: "Hỗ trợ 24/7", desc: "Luôn sẵn sàng giải đáp." },
    { title: "Giá cả hợp lý", desc: "Phù hợp mọi ngân sách." },
  ];

  return (
    <section style={{ padding: "50px 20px", textAlign: "center" }}>
      <h2>Lợi Ích Nổi Bật</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        {benefits.map((benefit, index) => (
          <div key={index} style={{ maxWidth: "300px" }}>
            <h3>{benefit.title}</h3>
            <p>{benefit.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
