import { Calendar, Clock, MapPin } from "lucide-react";

interface BookingDetailsProps {
  date: string;
  setDate: (date: string) => void;
  hours: number;
  setHours: (hours: number) => void;
  address: string;
  setAddress: (address: string) => void;
  notes: string;
  setNotes: (notes: string) => void;
}

const inputCls =
  "w-full rounded-xl border border-border bg-background px-3 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20";
const labelCls = "block text-xs font-medium text-muted-foreground mb-1.5";

export default function BookingDetails({
  date,
  setDate,
  hours,
  setHours,
  address,
  setAddress,
  notes,
  setNotes,
}: BookingDetailsProps) {
  return (
    <div className="rounded-3xl border border-border bg-card p-6">
      <h2 className="font-heading font-semibold mb-4">Booking details</h2>
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className={labelCls} htmlFor="date">
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5" /> Date
            </span>
          </label>
          <input
            id="date"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className={inputCls}
          />
        </div>
        <div>
          <label className={labelCls} htmlFor="hours">
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" /> Estimated hours
            </span>
          </label>
          <select
            id="hours"
            value={hours}
            onChange={(e) => setHours(Number(e.target.value))}
            className={`${inputCls} cursor-pointer`}
          >
            {[1, 2, 3, 4, 6, 8].map((h) => (
              <option key={h} value={h}>
                {h} {h === 1 ? "hour" : "hours"}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-4">
        <label className={labelCls} htmlFor="address">
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5" /> Service address
          </span>
        </label>
        <input
          id="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Street, apartment, city"
          className={inputCls}
        />
      </div>

      <div className="mt-4">
        <label className={labelCls} htmlFor="notes">
          Notes for the professional (optional)
        </label>
        <textarea
          id="notes"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          rows={3}
          placeholder="Describe the job, access instructions, materials on site…"
          className={`${inputCls} resize-none`}
        />
      </div>
    </div>
  );
}
