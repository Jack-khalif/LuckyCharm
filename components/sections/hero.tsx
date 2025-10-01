import { Button } from '@/components/ui/button'; // Assuming Shadcn Button
import Image from 'next/image';

export function Hero() {
  return (
    <section className="py-20 text-center">
      <Image src="/images/profile.jpg" alt="Jack Khalif" width={200} height={200} className="rounded-full mx-auto" />
      <h1 className="text-4xl font-bold">Jack Khalif</h1>
      <p className="text-xl">Biomedical Engineer & AI Enthusiast</p>
      <Button>Download CV</Button>
    </section>
  );
}