// import Image from "next/image";
// export default function Hero() {
//   return (
//     <section
//       style={{
//         background: "#f9f9f9",
//         padding: "50px 20px",
//         textAlign: "center",
//       }}
//     >
//       <h1 style={{ fontSize: "2.5rem", color: "#ff4500" }}>
//         Tăng Doanh Số Gấp 3 Lần!
//       </h1>
//       <p style={{ fontSize: "1.2rem", margin: "20px 0" }}>
//         Bí quyết đơn giản giúp bạn bán hàng hiệu quả hơn bao giờ hết.
//       </p>
//       <button>Mua Ngay</button>
//       <Image
//         src="/hero-image.webp"
//         alt="Sản phẩm minh họa"
//         width={800} // Thay bằng kích thước thực tế của ảnh
//         height={400}
//         style={{ marginTop: "20px" }}
//       />
//     </section>
//   );
// }

import Image from "next/image";

export default function Hero() {
  return (
    <section
      style={{
        background: "#f9f9f9",
        padding: "50px 20px",
        textAlign: "center",
        minHeight: "80vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ maxWidth: "600px", marginBottom: "40px" }}>
        <h1
          style={{
            fontSize: "clamp(1.5rem, 5vw, 2.5rem)", // Responsive font size
            color: "#ff4500",
            marginBottom: "20px",
          }}
        >
          Tăng Doanh Số Gấp 3 Lần!
        </h1>
        <p style={{ fontSize: "1.2rem", marginBottom: "30px" }}>
          Bí quyết đơn giản giúp bạn bán hàng hiệu quả hơn bao giờ hết.
        </p>
        <button
          style={{
            padding: "12px 24px",
            backgroundColor: "#ff4500",
            color: "white",
            border: "none",
            borderRadius: "5px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Mua Ngay
        </button>
      </div>
      <div style={{ maxWidth: "800px", width: "100%" }}>
        <Image
          src="/hero-image.webp"
          alt="Sản phẩm minh họa"
          width={800}
          height={400}
          style={{ width: "100%", height: "auto" }}
        />
      </div>
    </section>
  );
}
