import { useEffect, useState } from 'react';

import { useQuery } from '@apollo/client';
import { Box, Flex, Grid } from '@chakra-ui/react';
import { months, weekdays } from 'moment';
import { GrNext, GrPrevious } from 'react-icons/gr';

import { GET_AVAILABLE_DATES } from '../graphQL/queries';
import useWindowDimensions from '../hooks/useWindowDimensions';
import { range } from '../utils/helpers';

import { MonthName, WeekDate, WeekDay } from './calendar-styles';

function getDaysInMonth(year, month) {
  return new Date(year, month, 0).getDate();
}

function getMonthDay(year, month, day) {
  return new Date(year, month, day).getDay() - 1;
}

function getLastMonthEndingInThisMonth(year, month) {
  return getDaysInMonth(year, month) - new Date(year, month, 1).getDay() + 1;
}

const Calendar = ({ selected, setSelected, restaurantId, setAvailableDates, noDisabled }) => {
  const [month, setMonth] = useState(new Date());
  const [firstMonth, setFirstMonth] = useState({ month: 1, year: 1 });
  const [secondMonth, setSecondMonth] = useState({
    month: 1,
    year: 1,
  });
  const { width } = useWindowDimensions();

  const { data: availableDates } = useQuery(GET_AVAILABLE_DATES, {
    variables: {
      id: restaurantId,
    },
    onCompleted: (data) => {
      setAvailableDates(data?.getAvailableDates);
    },
  });

  useEffect(() => {
    setFirstMonth({ month: month.getMonth(), year: new Date().getFullYear() });
    setSecondMonth({
      month: new Date(new Date().getFullYear(), month.getMonth() + 1, 1).getMonth(),
      year: new Date(new Date().getFullYear(), month.getMonth() + 1, 1).getFullYear(),
    });
  }, [month]);

  return (
    <>
      <Flex justifyContent={'center'}>
        <GrPrevious
          onClick={() => {
            const monthC = month;
            monthC.setMonth((monthC.getMonth() - 1 > 0 ? monthC.getMonth() - 1 : 11) % 12);
            monthC.getMonth() + 1 >= 11 && monthC.setFullYear(monthC.getFullYear() - 1);
            setMonth(monthC);
            setFirstMonth({ month: monthC.getMonth(), year: new Date().getFullYear() });
            setSecondMonth({
              month: new Date(new Date().getFullYear(), monthC.getMonth() + 1, 1).getMonth(),
              year: new Date(new Date().getFullYear(), monthC.getMonth() + 1, 1).getFullYear(),
            });
          }}
        />
        <Month
          name={months(firstMonth.month)}
          selected={selected}
          start={getLastMonthEndingInThisMonth(month.getFullYear(), firstMonth.month)}
          end={getDaysInMonth(month.getFullYear(), firstMonth.month + 1)}
          lastMonthEnd={getDaysInMonth(month.getFullYear(), firstMonth.month)}
          month={firstMonth.month}
          year={firstMonth.year}
          setSelected={setSelected}
          availableDates={availableDates}
          noDisabled={noDisabled}
        />
        {width > 980 && (
          <>
            <p style={{ fontSize: 24, fontWeight: 500 }}>{month.getFullYear()}</p>
            <Month
              name={months(secondMonth.month)}
              selected={selected}
              start={getLastMonthEndingInThisMonth(month.getFullYear(), secondMonth.month)}
              end={getDaysInMonth(month.getFullYear(), secondMonth.month + 1)}
              lastMonthEnd={getDaysInMonth(month.getFullYear(), secondMonth.month)}
              month={secondMonth.month}
              year={secondMonth.year}
              setSelected={setSelected}
              availableDates={availableDates}
              noDisabled={noDisabled}
            />
          </>
        )}

        <GrNext
          onClick={() => {
            const monthC = month;
            monthC.setMonth((monthC.getMonth() + 1) % 12);
            monthC.getMonth() - 1 < 0 && monthC.setFullYear(monthC.getFullYear() + 1);
            setMonth(monthC);
            setFirstMonth({ month: monthC.getMonth(), year: new Date().getFullYear() });
            setSecondMonth({
              month: new Date(new Date().getFullYear(), monthC.getMonth() + 1, 1).getMonth(),
              year: new Date(new Date().getFullYear(), monthC.getMonth() + 1, 1).getFullYear(),
            });
          }}
        />
      </Flex>
    </>
  );
};

const Month = ({ name, start, end, lastMonthEnd, selected, month, year, setSelected, availableDates, noDisabled }) => {
  const { width } = useWindowDimensions();
  return (
    <Box width={width > 500 ? '435px' : 'fit-content'}>
      <Flex alignItems={'center'} justifyContent={'center'}>
        <MonthName>{name}</MonthName>
      </Flex>

      <Flex
        alignItems={'center'}
        justifyContent={'space-between'}
        paddingRight={width > 500 ? '20px' : `${Math.floor((width - 100) / 14) - 10}px`}
        paddingLeft={width > 500 ? '20px' : `${Math.floor((width - 100) / 14) - 10}px`}
        width={width > 500 ? '100%' : `${width - 100}px`}
      >
        {weekdays().map((day, i) => {
          return <WeekDay key={i}>{day.slice(0, 3)}</WeekDay>;
        })}
      </Flex>
      <Grid width={width > 500 ? '100%' : `${width - 100}px`} templateColumns={'repeat(7, 1fr)'} placeItems={'center'}>
        {[...range(start, lastMonthEnd + 1), ...range(1, end + 1)].map((el, i) => {
          return (
            <WeekDate
              key={i}
              selected={(selected as Date).getDate() == el && (selected as Date).getMonth() == month}
              disabled={
                !noDisabled
                  ? (i >= 0 && i <= lastMonthEnd - start) ||
                    availableDates?.getAvailableDates.filter((elf) => elf.day == getMonthDay(year, month, el))
                      ?.length == 0
                  : false
              }
              onClick={() => setSelected(new Date(year, month, el))}
            >
              {el}
            </WeekDate>
          );
        })}
      </Grid>
    </Box>
  );
};

export default Calendar;
