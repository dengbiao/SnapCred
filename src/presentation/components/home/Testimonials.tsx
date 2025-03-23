import React from "react";
import "@styles/components/home/Testimonials.scss";
import Card from "../../components/ui/Card";

interface Testimonial {
  id: string;
  content: string;
  rating: number; // 1-5 star rating
  author: {
    name: string;
    location: string;
    avatarColor?: string;
  };
}

const testimonialData: Testimonial[] = [
  {
    id: "1",
    content:
      '"我需要赶紧办理签证，但没时间去照相馆。快证先生帮我在家就完成了证件照制作，照片质量很高，使领馆完全接受了。非常方便！"',
    rating: 5,
    author: {
      name: "李明",
      location: "上海",
      avatarColor: "#4285F4",
    },
  },
  {
    id: "2",
    content:
      '"作为一个经常需要更新各种证件的人，快证先生真的解决了我的大问题。一次上传，可以生成各种尺寸的证件照，太棒了！"',
    rating: 5,
    author: {
      name: "张小华",
      location: "北京",
      avatarColor: "#34A853",
    },
  },
  {
    id: "3",
    content:
      '"AI自动优化功能真的很惊艳，自动调整了我照片的亮度和对比度，最终效果比我在本地照相馆拍的还要好！强烈推荐！"',
    rating: 4,
    author: {
      name: "王芳",
      location: "广州",
      avatarColor: "#FBBC05",
    },
  },
  {
    id: "4",
    content:
      '"只需简单几步，我就得到了完美的证件照。省去了找照相馆、等待冲印的麻烦，真是太高效了！"',
    rating: 5,
    author: {
      name: "赵伟",
      location: "成都",
      avatarColor: "#EA4335",
    },
  },
];

// Star rating component
const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
  return (
    <div className="star-rating" data-testid="testimonial-rating">
      {Array.from({ length: 5 }).map((_, index) => (
        <span
          key={index}
          className={`star ${index < rating ? "filled" : "empty"}`}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export const Testimonials: React.FC = () => {
  return (
    <section
      className="testimonials-section"
      data-testid="testimonials-section"
    >
      <h2 className="section-title">用户评价</h2>
      <div className="testimonials-container">
        <div className="testimonials-grid" data-testid="testimonials-grid">
          {testimonialData.map((testimonial) => (
            <div
              key={testimonial.id}
              className="testimonial-wrapper"
              data-testid="testimonial-card"
            >
              <Card
                className="testimonial-card"
                variant="elevated"
                padding="medium"
              >
                <p
                  className="testimonial-content"
                  data-testid="testimonial-content"
                >
                  {testimonial.content}
                </p>
                <StarRating rating={testimonial.rating} />
                <div className="testimonial-author">
                  <div
                    className="author-avatar"
                    data-testid="testimonial-avatar"
                    style={{
                      backgroundColor:
                        testimonial.author.avatarColor || "#4285F4",
                    }}
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="white"
                    >
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path>
                    </svg>
                  </div>
                  <div className="author-info">
                    <div className="author-name" data-testid="testimonial-name">
                      {testimonial.author.name}
                    </div>
                    <div className="author-title">
                      {testimonial.author.location}
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
