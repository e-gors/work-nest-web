import { useMemo, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Clock,
  DollarSign,
  X,
  Check,
} from "lucide-react";
import { cn } from "@/lib/utils";

type BookingStatus = "confirmed" | "pending" | "completed";

interface Booking {
  date: Date;
  title: string;
  client: string;
  rate: number;
  status: BookingStatus;
  duration: string;
}

interface BookingInput {
  offset: number;
  hour: number;
  title: string;
  client: string;
  rate: number;
  status: BookingStatus;
  duration: string;
}

const WEEKDAYS: string[] = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const MONTHS: string[] = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const STATUS_STYLES: Record<BookingStatus, string> = {
  confirmed: "bg-emerald-500",
  pending: "bg-amber-500",
  completed: "bg-sky-500",
};

// Sample bookings relative to today
function buildBookings(): Booking[] {
  const today = new Date();

  const createBooking = ({
    offset,
    hour,
    title,
    client,
    rate,
    status,
    duration,
  }: BookingInput): Booking => {
    const date = new Date(today);

    date.setDate(date.getDate() + offset);
    date.setHours(hour, 0, 0, 0);

    return {
      date,
      title,
      client,
      rate,
      status,
      duration,
    };
  };

  return [
    createBooking({
      offset: 0,
      hour: 10,
      title: "Panel upgrade",
      client: "Sarah K.",
      rate: 220,
      status: "confirmed",
      duration: "3h",
    }),
    createBooking({
      offset: 0,
      hour: 15,
      title: "Light fixture install",
      client: "Mike R.",
      rate: 90,
      status: "pending",
      duration: "1.5h",
    }),
    createBooking({
      offset: 1,
      hour: 9,
      title: "Wiring inspection",
      client: "Linda P.",
      rate: 150,
      status: "confirmed",
      duration: "2h",
    }),
    createBooking({
      offset: 2,
      hour: 14,
      title: "Emergency repair",
      client: "Tom B.",
      rate: 300,
      status: "confirmed",
      duration: "4h",
    }),
    createBooking({
      offset: 5,
      hour: 11,
      title: "Smoke detector setup",
      client: "Jenny L.",
      rate: 75,
      status: "pending",
      duration: "1h",
    }),
    createBooking({
      offset: 7,
      hour: 13,
      title: "Full rewiring consult",
      client: "Carlos M.",
      rate: 480,
      status: "confirmed",
      duration: "6h",
    }),
    createBooking({
      offset: 10,
      hour: 10,
      title: "Outlet replacement",
      client: "Amy S.",
      rate: 120,
      status: "confirmed",
      duration: "2h",
    }),
    createBooking({
      offset: 14,
      hour: 9,
      title: "Ceiling fan install",
      client: "Greg D.",
      rate: 85,
      status: "pending",
      duration: "1.5h",
    }),
  ];
}

export default function WorkerCalendar() {
  const [viewMonth, setViewMonth] = useState<number>(new Date().getMonth());

  const [viewYear, setViewYear] = useState<number>(new Date().getFullYear());

  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  const [bookings] = useState<Booking[]>(buildBookings);

  const [blockedDays, setBlockedDays] = useState<Date[]>([]);

  const today = useMemo(() => {
    const date = new Date();
    date.setHours(0, 0, 0, 0);
    return date;
  }, []);

  const calendarDays = useMemo<(Date | null)[]>(() => {
    const firstDay = new Date(viewYear, viewMonth, 1);
    const startWeekday = firstDay.getDay();

    const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();

    const cells: (Date | null)[] = [];

    for (let i = 0; i < startWeekday; i++) {
      cells.push(null);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      cells.push(new Date(viewYear, viewMonth, day));
    }

    return cells;
  }, [viewMonth, viewYear]);

  const bookingsForDate = (date: Date): Booking[] =>
    bookings.filter(
      (booking) => booking.date.toDateString() === date.toDateString(),
    );

  const isBlocked = (date: Date): boolean =>
    blockedDays.some((day) => day.toDateString() === date.toDateString());

  const toggleBlocked = (date: Date): void => {
    setSelectedDate(date);

    setBlockedDays((previousDays) =>
      previousDays.some((day) => day.toDateString() === date.toDateString())
        ? previousDays.filter(
            (day) => day.toDateString() !== date.toDateString(),
          )
        : [...previousDays, date],
    );
  };

  const prevMonth = (): void => {
    if (viewMonth === 0) {
      setViewMonth(11);
      setViewYear((year) => year - 1);
    } else {
      setViewMonth((month) => month - 1);
    }
  };

  const nextMonth = (): void => {
    if (viewMonth === 11) {
      setViewMonth(0);
      setViewYear((year) => year + 1);
    } else {
      setViewMonth((month) => month + 1);
    }
  };

  const selectedBookings = bookingsForDate(selectedDate);
  const selectedBlocked = isBlocked(selectedDate);

  const upcomingBookings = useMemo(
    () =>
      [...bookings]
        .filter((booking) => booking.date >= today)
        .sort((a, b) => a.date.getTime() - b.date.getTime())
        .slice(0, 5),
    [bookings, today],
  );

  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {/* Calendar grid */}
      <div className="rounded-2xl border border-border bg-card p-5 lg:col-span-2">
        <div className="mb-5 flex items-center justify-between">
          <h2 className="font-heading text-lg font-bold">
            {MONTHS[viewMonth]} {viewYear}
          </h2>

          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={prevMonth}
              aria-label="Previous month"
              className="grid h-9 w-9 place-items-center rounded-lg border border-border transition-colors hover:bg-muted"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>

            <button
              type="button"
              onClick={() => {
                const now = new Date();

                setViewMonth(now.getMonth());
                setViewYear(now.getFullYear());
                setSelectedDate(now);
              }}
              className="h-9 rounded-lg border border-border px-3 text-xs font-medium transition-colors hover:bg-muted"
            >
              Today
            </button>

            <button
              type="button"
              onClick={nextMonth}
              aria-label="Next month"
              className="grid h-9 w-9 place-items-center rounded-lg border border-border transition-colors hover:bg-muted"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="mb-1 grid grid-cols-7 gap-1">
          {WEEKDAYS.map((day) => (
            <div
              key={day}
              className="py-1 text-center text-[11px] font-semibold text-muted-foreground"
            >
              {day}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-1">
          {calendarDays.map((date, index) => {
            if (!date) {
              return <div key={`empty-${index}`} />;
            }

            const dayBookings = bookingsForDate(date);
            const blocked = isBlocked(date);

            const isToday = date.toDateString() === today.toDateString();

            const isSelected =
              date.toDateString() === selectedDate.toDateString();

            const isPast = date < today;

            return (
              <button
                type="button"
                key={date.toISOString()}
                onClick={() => setSelectedDate(date)}
                onDoubleClick={() => toggleBlocked(date)}
                aria-label={`${date.toLocaleDateString()}, ${
                  blocked ? "unavailable" : "available"
                }`}
                aria-pressed={isSelected}
                className={cn(
                  "relative flex aspect-square flex-col items-start rounded-xl border p-1.5 text-left transition-all",
                  isSelected
                    ? "border-primary bg-primary/5 ring-1 ring-primary"
                    : "border-border hover:border-primary/40 hover:bg-muted/50",
                  isPast && "opacity-40",
                  blocked && "border-red-200 bg-red-50",
                )}
              >
                <span
                  className={cn(
                    "text-xs font-semibold",
                    isToday &&
                      "grid h-5 w-5 place-items-center rounded-full bg-primary text-primary-foreground",
                  )}
                >
                  {date.getDate()}
                </span>

                <div className="mt-auto flex w-full flex-wrap gap-0.5">
                  {dayBookings.slice(0, 3).map((booking, index) => (
                    <span
                      key={`${booking.title}-${index}`}
                      className={cn(
                        "h-1.5 w-1.5 rounded-full",
                        STATUS_STYLES[booking.status],
                      )}
                    />
                  ))}
                </div>

                {blocked && (
                  <span className="absolute inset-0 grid place-items-center">
                    <X className="h-4 w-4 text-red-400" />
                  </span>
                )}
              </button>
            );
          })}
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            Confirmed
          </span>

          <span className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-amber-500" />
            Pending
          </span>

          <span className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-red-300" />
            Blocked / Unavailable
          </span>

          <span className="ml-auto hidden sm:inline">
            Double-click a day to toggle availability
          </span>
        </div>
      </div>

      {/* Selected day and upcoming bookings */}
      <div className="space-y-6">
        <div className="rounded-2xl border border-border bg-card p-5">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="font-heading text-sm font-semibold">
              {selectedDate.toLocaleDateString("en-US", {
                weekday: "long",
                month: "short",
                day: "numeric",
              })}
            </h3>

            <button
              type="button"
              onClick={() => toggleBlocked(selectedDate)}
              className={cn(
                "inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1 text-xs font-medium transition-colors",
                selectedBlocked
                  ? "bg-red-100 text-red-700 hover:bg-red-200"
                  : "bg-emerald-100 text-emerald-700 hover:bg-emerald-200",
              )}
            >
              {selectedBlocked ? (
                <>
                  <X className="h-3 w-3" />
                  Unavailable
                </>
              ) : (
                <>
                  <Check className="h-3 w-3" />
                  Available
                </>
              )}
            </button>
          </div>

          {selectedBlocked ? (
            <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-center">
              <X className="mx-auto mb-1.5 h-6 w-6 text-red-400" />

              <p className="text-sm font-medium text-red-700">
                Marked unavailable
              </p>

              <p className="mt-0.5 text-xs text-red-500">
                You won't receive bookings on this day.
              </p>
            </div>
          ) : selectedBookings.length === 0 ? (
            <div className="rounded-xl border border-dashed border-border py-8 text-center">
              <Clock className="mx-auto mb-2 h-6 w-6 text-muted-foreground/40" />

              <p className="text-sm text-muted-foreground">
                No bookings scheduled.
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {selectedBookings
                .sort((a, b) => a.date.getTime() - b.date.getTime())
                .map((booking, index) => (
                  <div
                    key={`${booking.title}-${index}`}
                    className="rounded-xl border border-border p-3 transition-shadow hover:shadow-sm"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="flex items-center gap-1 text-xs font-semibold text-primary">
                        <Clock className="h-3 w-3" />

                        {booking.date.toLocaleTimeString("en-US", {
                          hour: "numeric",
                          minute: "2-digit",
                        })}
                      </span>

                      <span
                        className={cn(
                          "rounded-full px-2 py-0.5 text-[10px] font-semibold capitalize",
                          booking.status === "confirmed"
                            ? "bg-emerald-50 text-emerald-600"
                            : booking.status === "pending"
                              ? "bg-amber-50 text-amber-600"
                              : "bg-sky-50 text-sky-600",
                        )}
                      >
                        {booking.status}
                      </span>
                    </div>

                    <p className="mt-1.5 text-sm font-medium">
                      {booking.title}
                    </p>

                    <div className="mt-1 flex items-center gap-3 text-xs text-muted-foreground">
                      <span>{booking.client}</span>

                      <span className="flex items-center gap-0.5">
                        <DollarSign className="h-3 w-3" />
                        {booking.rate}
                      </span>

                      <span>{booking.duration}</span>
                    </div>
                  </div>
                ))}
            </div>
          )}
        </div>

        {/* Upcoming bookings */}
        <div className="rounded-2xl border border-border bg-card p-5">
          <h3 className="mb-4 font-heading text-sm font-semibold">
            Upcoming Bookings
          </h3>

          <div className="space-y-2.5">
            {upcomingBookings.map((booking, index) => (
              <button
                type="button"
                key={`${booking.title}-${index}`}
                onClick={() => {
                  setSelectedDate(booking.date);
                  setViewMonth(booking.date.getMonth());
                  setViewYear(booking.date.getFullYear());
                }}
                className="flex w-full cursor-pointer items-center gap-3 rounded-xl p-2 text-left transition-colors hover:bg-muted/50"
              >
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
                  <div className="text-center leading-none">
                    <div className="text-[10px] font-medium uppercase">
                      {booking.date.toLocaleDateString("en-US", {
                        month: "short",
                      })}
                    </div>

                    <div className="text-sm font-bold">
                      {booking.date.getDate()}
                    </div>
                  </div>
                </div>

                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium">
                    {booking.title}
                  </p>

                  <p className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock className="h-3 w-3" />

                    {booking.date.toLocaleTimeString("en-US", {
                      hour: "numeric",
                      minute: "2-digit",
                    })}

                    {" · "}
                    {booking.client}
                  </p>
                </div>

                <span
                  className={cn(
                    "h-2 w-2 shrink-0 rounded-full",
                    STATUS_STYLES[booking.status],
                  )}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
