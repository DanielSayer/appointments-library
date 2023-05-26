import { oneOfType } from "prop-types"
import React, { useRef } from "react"
import { Input } from "reactstrap"

interface ITimePicker {
  id?: string | undefined
  name?: string | undefined
  placeholder?: string | null
  value: string
  isDisabled?: boolean
  onChange: (timeStr: string) => void
}


const TimePicker = (props: ITimePicker): React.ReactElement => {
  const { id, name, value, isDisabled, onChange } = props

  const timeRef = useRef() as React.MutableRefObject<HTMLInputElement>

  const handleTimeChange = (e: HTMLInputElement) => {
    const formattedTime: string = translateInputToTime(timeRef.current.value)
    e.value = formattedTime
    onChange(`${formattedTime}:00`)
  }

  const translateThreeIntegersToTime = (
    input: number,
    isAfterNoon: boolean
  ): number[] => {
    let overflow: number = input % 100 > 59 ? 1 : 0
    var minutes = (input % 100) % 60 //%100 gets the _xx of the number and %60 changes the base
    var hours = Math.floor(input / 100) + overflow
    if (isAfterNoon) hours += 12 //Cannot get a hours > 12 initially
    return [hours, minutes]
  }

  const translateInputToTime = (input: string): string => {
    let isAfterNoon: boolean =
      input.toUpperCase().includes("PM") && !input.toUpperCase().includes("AM")

    const removeNonNumericCharacters = input.replace(/\D/g, "")
    const timeInputAsInteger = parseInt(removeNonNumericCharacters)
    let hours: number = 0
    let minutes: number = 0
    let overflow: number = 0
    switch (removeNonNumericCharacters.length) {
      case 0: //Defaults are set
        break
      case 1:
        isAfterNoon
          ? (hours = 12 + timeInputAsInteger)
          : (hours = timeInputAsInteger)
        break
      case 2:
        if (isAfterNoon && timeInputAsInteger < 12) {
          hours = 12 + timeInputAsInteger
        } else if (timeInputAsInteger <= 24) {
          hours = timeInputAsInteger
        } else {
          //Input is larger than 24 -> we take the first number as the hours and the seconds as the mins = x0 accounting for overflow
          overflow = timeInputAsInteger % 10 > 5 ? 1 : 0
          ;(minutes = ((timeInputAsInteger % 10) % 6) * 10),
            (hours = Math.floor(timeInputAsInteger / 10) + overflow)
          if (isAfterNoon) hours += 12
        }
        break
      case 3:
        ;[hours, minutes] = translateThreeIntegersToTime(
          timeInputAsInteger,
          isAfterNoon
        )
        break
      default: //String length >=4
        let trimmedInput: number = parseInt(
          removeNonNumericCharacters.slice(0, 4)
        )
        if (trimmedInput < 2500) {
          ;(overflow = trimmedInput % 100 > 59 ? 1 : 0),
            (hours = Math.floor((trimmedInput % 2400) / 100) + overflow),
            (minutes = (trimmedInput % 100) % 60)
          if (isAfterNoon && hours < 12) hours += 12
        } else {
          ;[hours, minutes] = translateThreeIntegersToTime(
            Math.floor(trimmedInput / 10),
            isAfterNoon
          )
          if (trimmedInput % 10 > 5) minutes += 1
        }
    }
    const hourString: string = hours.toString().padStart(2, "0")
    const minuteString: string = minutes.toString().padStart(2, "0")
    return `${hourString}:${minuteString}`
  }

  return (
    <Input
      id={id}
      name={name}
      disabled={isDisabled}
      innerRef={timeRef}
      onBlur={(e) => handleTimeChange(e.target)}
      defaultValue={translateInputToTime(value)}
      key={value}
    />
  )
}

export { TimePicker };
export type { ITimePicker };