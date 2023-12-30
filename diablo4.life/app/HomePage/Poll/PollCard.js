'use client';
import React, { useState } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import ProgressBar from './ProgressBar';

export default function PollCard() {
  const [selectedValue, setSelectedValue] = useState('');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div className="my-5">
      <h1
        id="demo-radio-buttons-group-label"
        className="text-gray-200 text-[20px]"
      >
        Are you ready for the Abattoir of Zir
      </h1>
      <FormControl className="block">
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          value={selectedValue}
          onChange={handleChange}
          name="radio-buttons-group"
        >
          <div
            className={`border-[1px] rounded-lg p-3 my-1 cursor-pointer ${
              selectedValue === 'one' ? 'border-red-500' : 'border-[#393e4c]'
            } hover:bg-[#252630]`}
            onClick={() => setSelectedValue('one')}
          >
            <FormControlLabel
              value="one"
              control={<Radio sx={{ '&.Mui-checked': { color: '#cb4848' } }} />}
              label="Yes, all ready"
              className="text-gray-400"
            />
            <ProgressBar isChecked={selectedValue === 'one'} />
          </div>

          <div
            className={`border-[1px] rounded-lg p-3 my-1 cursor-pointer ${
              selectedValue === 'two' ? 'border-red-500' : 'border-[#393e4c]'
            } hover:bg-[#252630]`}
            onClick={() => setSelectedValue('two')}
          >
            <FormControlLabel
              value="two"
              control={<Radio sx={{ '&.Mui-checked': { color: '#cb4848' } }} />}
              label="No, not level 100 yet"
              className="text-gray-400"
            />
            <ProgressBar isChecked={selectedValue === 'two'} />
          </div>
          <div
            className={`border-[1px] rounded-lg p-3 my-1 cursor-pointer ${
              selectedValue === 'three' ? 'border-red-500' : 'border-[#393e4c]'
            } hover:bg-[#252630]`}
            onClick={() => setSelectedValue('three')}
          >
            <FormControlLabel
              value="three"
              control={<Radio sx={{ '&.Mui-checked': { color: '#cb4848' } }} />}
              label="Still preparing my gear and build"
              className="text-gray-400"
            />
            <ProgressBar isChecked={selectedValue === 'three'} />
          </div>
          <div
            className={`border-[1px] rounded-lg p-3 my-1 cursor-pointer ${
              selectedValue === 'four' ? 'border-red-500' : 'border-[#393e4c]'
            } hover:bg-[#252630]`}
            onClick={() => setSelectedValue('four')}
          >
            <FormControlLabel
              value="four"
              control={<Radio sx={{ '&.Mui-checked': { color: '#cb4848' } }} />}
              label="Not interested"
              className="text-gray-400"
            />
            <ProgressBar isChecked={selectedValue === 'four'} />
          </div>
        </RadioGroup>
      </FormControl>
    </div>
  );
}
