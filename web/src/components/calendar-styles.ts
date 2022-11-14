import styled from 'styled-components';

export const MonthName = styled.p`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  /* identical to box height */

  /* Gray 1 */

  color: #333333;

  /* Inside auto layout */

  flex: none;
  order: 1;
  flex-grow: 0;
`;

export const WeekDay = styled.p`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  /* identical to box height */

  /* Gray 1 */

  color: #333333;
`;

export const WeekDate = styled.p<{ selected?: boolean; disabled?: boolean }>`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  margin-bottom: 19px;
  /* identical to box height */

  /* Gray 1 */

  color: ${(props) => (props.disabled ? '#E0E0E0' : props.selected ? '#fff' : '#333333')};
  background-color: ${(props) => (!props.disabled && props.selected ? '#FF9916' : '#fff')};
  padding: 5px;
  cursor: pointer;
  border-radius: 50%;
  &:hover {
    background-color: #ff991677;
  }
`;
