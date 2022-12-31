import React, { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import style from './form.module.css'
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import Button from '../../components/button/button'
import dateFormat from 'dateformat'
import { v4 as uuidv4 } from 'uuid'
import { Modal } from 'modal-react-virginie'

export default function Form({ setEmployeeList }) {
  const {
    handleSubmit,
    control,
    register,
    reset,
    formState: { errors },
  } = useForm()

  const [isOpenModal, setIsOpenModal] = useState(false)

  function onSubmit(inputs) {
    // code that converts a Date to YY/MM/DD format
    const birthDate = dateFormat(inputs.birthDate, 'isoDate').toString()
    const startDate = dateFormat(inputs.startDate, 'isoDate').toString()

    const newEmployee = {
      ...inputs,
      // To manage unique id using uuid
      id: uuidv4(),
      birthDate,
      startDate,
    }

    setEmployeeList((previousValues) => [...previousValues, newEmployee])
    console.log(inputs)
    toggleModal()
    reset()
  }
  const toggleModal = () => setIsOpenModal(!isOpenModal)
  return (
    <>
      <div className={style.container}>
        <h2>Create Employee</h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          action="#"
          id={style.employeeList}
        >
          <div>
            <label htmlFor="firstName">First Name</label>
            <input
              id="firstName"
              type="text"
              {...register('firstName', { required: true, minLength: 2 })}
            />
            {errors.firstname && <p>Error</p>}
          </div>
          <div>
            <label htmlFor="lastName">Last Name</label>
            <input
              id="lastName"
              type="text"
              {...register('lastName', { required: true, minLength: 2 })}
            />
            {errors.lastname && <p>Error</p>}
          </div>

          <div className={style.calendar}>
            <Controller
              id="birthDate"
              name="birthDate"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <Stack spacing={3}>
                    <DesktopDatePicker
                      label="Date of Birth"
                      inputFormat="YYYY/MM/DD"
                      {...field}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </Stack>
                </LocalizationProvider>
              )}
            />
          </div>
          <div className={style.calendar}>
            <Controller
              name="startDate"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <Stack spacing={3}>
                    <DesktopDatePicker
                      label="Date of Birth"
                      inputFormat="YYYY/MM/DD"
                      {...field}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </Stack>
                </LocalizationProvider>
              )}
            />
          </div>

          <fieldset className="address">
            <legend>Address</legend>
            <div>
              <label htmlFor="street">Street</label>
              <input
                type="text"
                {...register('street', { required: true, minLength: 2 })}
              />
              {errors.street && <p>Error</p>}
            </div>
            <div>
              <label htmlFor="city">City</label>
              <input
                type="text"
                {...register('city', { required: true, minLength: 2 })}
              />
              {errors.state && <p>Error</p>}
            </div>
            <div>
              <label htmlFor="state">State</label>
              <select name="state" {...register('state', { required: true })}>
                {states.map((elt, idx) => (
                  <option key={idx} value={elt.abbreviation}>
                    {elt.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="zipCode">Zip Code</label>
              <input
                type="number"
                {...register('zipCode', { required: true })}
              />
            </div>
          </fieldset>

          <label htmlFor="department">Department</label>
          <select
            name="department"
            {...register('department', { required: true })}
          >
            <option>Sales</option>
            <option>Marketing</option>
            <option>Engineering</option>
            <option>Human Resources</option>
            <option>Legal</option>
          </select>
          <Button />
        </form>
      </div>
      <Modal isOpen={isOpenModal} close onClose={toggleModal}>
        <p>Employee Created!</p>
      </Modal>
    </>
  )
}

const states = [
  {
    name: '--Please choose an option--',
    abbreviation: '',
  },
  {
    name: 'Alabama',
    abbreviation: 'AL',
  },
  {
    name: 'Alaska',
    abbreviation: 'AK',
  },
  {
    name: 'American Samoa',
    abbreviation: 'AS',
  },
  {
    name: 'Arizona',
    abbreviation: 'AZ',
  },
  {
    name: 'Arkansas',
    abbreviation: 'AR',
  },
  {
    name: 'California',
    abbreviation: 'CA',
  },
  {
    name: 'Colorado',
    abbreviation: 'CO',
  },
  {
    name: 'Connecticut',
    abbreviation: 'CT',
  },
  {
    name: 'Delaware',
    abbreviation: 'DE',
  },
  {
    name: 'District Of Columbia',
    abbreviation: 'DC',
  },
  {
    name: 'Federated States Of Micronesia',
    abbreviation: 'FM',
  },
  {
    name: 'Florida',
    abbreviation: 'FL',
  },
  {
    name: 'Georgia',
    abbreviation: 'GA',
  },
  {
    name: 'Guam',
    abbreviation: 'GU',
  },
  {
    name: 'Hawaii',
    abbreviation: 'HI',
  },
  {
    name: 'Idaho',
    abbreviation: 'ID',
  },
  {
    name: 'Illinois',
    abbreviation: 'IL',
  },
  {
    name: 'Indiana',
    abbreviation: 'IN',
  },
  {
    name: 'Iowa',
    abbreviation: 'IA',
  },
  {
    name: 'Kansas',
    abbreviation: 'KS',
  },
  {
    name: 'Kentucky',
    abbreviation: 'KY',
  },
  {
    name: 'Louisiana',
    abbreviation: 'LA',
  },
  {
    name: 'Maine',
    abbreviation: 'ME',
  },
  {
    name: 'Marshall Islands',
    abbreviation: 'MH',
  },
  {
    name: 'Maryland',
    abbreviation: 'MD',
  },
  {
    name: 'Massachusetts',
    abbreviation: 'MA',
  },
  {
    name: 'Michigan',
    abbreviation: 'MI',
  },
  {
    name: 'Minnesota',
    abbreviation: 'MN',
  },
  {
    name: 'Mississippi',
    abbreviation: 'MS',
  },
  {
    name: 'Missouri',
    abbreviation: 'MO',
  },
  {
    name: 'Montana',
    abbreviation: 'MT',
  },
  {
    name: 'Nebraska',
    abbreviation: 'NE',
  },
  {
    name: 'Nevada',
    abbreviation: 'NV',
  },
  {
    name: 'New Hampshire',
    abbreviation: 'NH',
  },
  {
    name: 'New Jersey',
    abbreviation: 'NJ',
  },
  {
    name: 'New Mexico',
    abbreviation: 'NM',
  },
  {
    name: 'New York',
    abbreviation: 'NY',
  },
  {
    name: 'North Carolina',
    abbreviation: 'NC',
  },
  {
    name: 'North Dakota',
    abbreviation: 'ND',
  },
  {
    name: 'Northern Mariana Islands',
    abbreviation: 'MP',
  },
  {
    name: 'Ohio',
    abbreviation: 'OH',
  },
  {
    name: 'Oklahoma',
    abbreviation: 'OK',
  },
  {
    name: 'Oregon',
    abbreviation: 'OR',
  },
  {
    name: 'Palau',
    abbreviation: 'PW',
  },
  {
    name: 'Pennsylvania',
    abbreviation: 'PA',
  },
  {
    name: 'Puerto Rico',
    abbreviation: 'PR',
  },
  {
    name: 'Rhode Island',
    abbreviation: 'RI',
  },
  {
    name: 'South Carolina',
    abbreviation: 'SC',
  },
  {
    name: 'South Dakota',
    abbreviation: 'SD',
  },
  {
    name: 'Tennessee',
    abbreviation: 'TN',
  },
  {
    name: 'Texas',
    abbreviation: 'TX',
  },
  {
    name: 'Utah',
    abbreviation: 'UT',
  },
  {
    name: 'Vermont',
    abbreviation: 'VT',
  },
  {
    name: 'Virgin Islands',
    abbreviation: 'VI',
  },
  {
    name: 'Virginia',
    abbreviation: 'VA',
  },
  {
    name: 'Washington',
    abbreviation: 'WA',
  },
  {
    name: 'West Virginia',
    abbreviation: 'WV',
  },
  {
    name: 'Wisconsin',
    abbreviation: 'WI',
  },
  {
    name: 'Wyoming',
    abbreviation: 'WY',
  },
]
