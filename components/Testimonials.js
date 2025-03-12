export default function Testimonials() {
  const reviews = [
    {
      name: "Anh Hùng",
      text: "Sản phẩm tuyệt vời, tăng doanh số ngay tuần đầu!",
    },
    { name: "Chị Lan", text: "Dễ dùng, hỗ trợ nhiệt tình." },
  ];

  return (
    <section
      style={{
        background: "#f1f1f1",
        padding: "50px 20px",
        textAlign: "center",
      }}
    >
      <h2>Khách Hàng Nói Gì</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        {reviews.map((review, index) => (
          <div
            key={index}
            style={{
              maxWidth: "300px",
              border: "1px solid #ddd",
              padding: "20px",
            }}
          >
            <p>&quot;{review.text}&quot;</p>
            <p>- {review.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
