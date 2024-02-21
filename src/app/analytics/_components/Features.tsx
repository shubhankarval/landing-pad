import { it } from "node:test";
import Icon from "./Icon";

const featuresData = [
  {
    heading: "Monitoring 24/7",
    text: "Lorem ipsum dolor sit amet, consectetur adipis cing elit. Elementum nisi aliquet volutpat.",
  },
  {
    heading: "Widget System",
    text: "Sapien in etiam vitae nibh nunc mattis imperdiet sed nullam. Vitae et, tortor pulvinar risus pulvinar.",
  },
  {
    heading: "Best Performance",
    text: "Lorem ipsum dolor sit amet, consectetur adipis cing elit. Elementum nisi aliquet volutpat.",
  },
];

export default function Features() {
  return (
    <div className="flex justify-between">
      {featuresData.map((item, index) => (
        <div key={index} className="flex flex-col items-center gap-6">
          <Icon iconType="features" iconNumber={index + 1} className="w-16" />
          <h4>{item.heading}</h4>
          <p>{item.text}</p>
        </div>
      ))}
    </div>
  );
}
