import React from 'react';
import { Calendar, Clock, RefreshCw } from 'lucide-react';
import type { ScheduledRide } from '../../types/booking';

interface ScheduleRideProps {
  value: ScheduledRide;
  onChange: (schedule: ScheduledRide) => void;
}

export default function ScheduleRide({ value, onChange }: ScheduleRideProps) {
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return (
    <div className="space-y-4 p-4 bg-white rounded-lg shadow-sm">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium">Schedule Ride</h3>
        <button
          onClick={() => onChange({ ...value, isRecurring: !value.isRecurring })}
          className={`flex items-center space-x-2 px-3 py-1 rounded-full ${
            value.isRecurring
              ? 'bg-indigo-100 text-indigo-700'
              : 'bg-gray-100 text-gray-700'
          }`}
        >
          <RefreshCw className="w-4 h-4" />
          <span>Recurring</span>
        </button>
      </div>

      <div className="flex space-x-4">
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Date
          </label>
          <div className="flex items-center space-x-2 border rounded-lg px-3 py-2">
            <Calendar className="w-5 h-5 text-gray-400" />
            <input
              type="date"
              value={value.scheduledTime.toISOString().split('T')[0]}
              onChange={(e) =>
                onChange({
                  ...value,
                  scheduledTime: new Date(e.target.value),
                })
              }
              className="flex-1 outline-none"
            />
          </div>
        </div>

        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Time
          </label>
          <div className="flex items-center space-x-2 border rounded-lg px-3 py-2">
            <Clock className="w-5 h-5 text-gray-400" />
            <input
              type="time"
              value={value.scheduledTime.toTimeString().slice(0, 5)}
              onChange={(e) => {
                const [hours, minutes] = e.target.value.split(':');
                const newDate = new Date(value.scheduledTime);
                newDate.setHours(parseInt(hours), parseInt(minutes));
                onChange({
                  ...value,
                  scheduledTime: newDate,
                });
              }}
              className="flex-1 outline-none"
            />
          </div>
        </div>
      </div>

      {value.isRecurring && (
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Repeat on
          </label>
          <div className="flex space-x-2">
            {daysOfWeek.map((day, index) => (
              <button
                key={day}
                onClick={() => {
                  const days = value.recurringDays || [];
                  const newDays = days.includes(index)
                    ? days.filter((d) => d !== index)
                    : [...days, index];
                  onChange({
                    ...value,
                    recurringDays: newDays,
                  });
                }}
                className={`w-10 h-10 rounded-full flex items-center justify-center text-sm ${
                  value.recurringDays?.includes(index)
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-100 text-gray-700'
                }`}
              >
                {day}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}