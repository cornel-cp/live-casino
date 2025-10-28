import { MapPin } from "lucide-react";

export default function LocationOutline() {
  return (
    <div className="flex items-center justify-center">
      <MapPin className="text-red-600 w-7 h-8" strokeWidth={1.5} />
    </div>
  );
}
