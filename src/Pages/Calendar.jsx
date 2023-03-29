import React from 'react'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { Badge } from '@mui/material';
import { PickersDay } from '@mui/x-date-pickers';
// import CheckIcon from '@mui/icons-material/Check';


function Calendar() {
  const [value, setValue] = useState(new Date())
  const [highlightedDays, setHighlightedDays] = useState([1, 13, 2])
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <StaticDatePicker orientation="portrait"
        openTo="day"
        value={value}
        onChange={(newValue) => {
          setValue(newValue)
        }}
        renderInput={(params) => <TextField {...params} />
        }

        renderDay={(day, _value, DayComponentProps) => {
          const isSelected =
            !DayComponentProps.outsideCurrentMonth &&
            highlightedDays.indexOf(day.getDate()) > 0;

          return (
            <Badge
              key={day.toString()}
              overlap='circular'
              badgeContent={isSelected ? '🌚' : undefined}
            >
              <PickersDay {...DayComponentProps} />
            </Badge>
          );
        }}
        
      />
    </LocalizationProvider>
  );
}

export default Calendar

