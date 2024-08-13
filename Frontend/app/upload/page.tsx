import HowItWorks from "@/components/HowItWorks";
import ImageUploader from "@/components/ImageUploader";

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <ImageUploader />

      <div className="mt-24">
        <HowItWorks />
      </div>
    </div>
  );
}
