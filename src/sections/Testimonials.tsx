import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png";
import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";

const testimonials = [
  {
    name: "Vedant Shirole",
    position: "Front End Developer",
    text: "I've seen Satish juggling both tasks in hand, managing college as well as internship. He has always been a very good partner as well as an hardworker. Also very punctual.",
    avatar: memojiAvatar1,
  },
  {
    name: "Swaroop Rangale",
    position: "Head of Design @ GreenLeaf",
    text: "Satish is familiar with wide range of programming utilities and languages. He is a Skilled multitasker with superior work ethic and good teamwork, problem-solving and organizational skills. Willing to take on any task to help team. Reliable and dedicated team player with hardworking and resourceful approach.",
    avatar: memojiAvatar2,
  },
];

export const TestimonialsSection = () => {
  return (
    <div>
      <p>Testimonials</p>
      <div>
        {testimonials.map(testimonial => (
          <div key={testimonial.name}>
            <p>{testimonial.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
