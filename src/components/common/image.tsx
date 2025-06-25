import NextImage, { ImageProps } from "next/image";
import { cn } from "@/lib/utils";

interface CustomImageProps extends ImageProps {
  className?: string;
  wrapperClassName?: string;
}

export function Image({ className, wrapperClassName, ...props }: CustomImageProps) {
  return (
    <div className={cn("relative", wrapperClassName)}>
      <NextImage className={cn("object-cover", className)} {...props} />
    </div>
  );
}
