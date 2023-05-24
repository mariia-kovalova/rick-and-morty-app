import { nanoid } from '@reduxjs/toolkit';
import { alive, dead, unknown } from 'shared/constants/characterStatus';
import {
  male,
  female,
  genderless,
  genderunknown,
} from 'shared/constants/characterGender';

const statusAllId = nanoid();
const statusAliveId = nanoid();
const statusDeadId = nanoid();
const statusUnknownId = nanoid();

const genderAllId = nanoid();
const genderMaleId = nanoid();
const genderFemaleId = nanoid();
const genderLessId = nanoid();
const genderUnknownId = nanoid();

const radioFieldsStatusArr = [
  {
    id: statusAllId,
    inputName: 'status',
    label: 'all',
    value: '',
  },
  {
    id: statusAliveId,
    inputName: 'status',
    label: alive,
    value: alive,
  },
  {
    id: statusDeadId,
    inputName: 'status',
    label: dead,
    value: dead,
  },
  {
    id: statusUnknownId,
    inputName: 'status',
    label: unknown,
    value: unknown,
  },
];

const radioFieldsGenderArr = [
  {
    id: genderAllId,
    inputName: 'gender',
    label: 'all',
    value: '',
  },
  {
    id: genderMaleId,
    inputName: 'gender',
    label: male,
    value: male,
  },
  {
    id: genderFemaleId,
    inputName: 'gender',
    label: female,
    value: female,
  },
  {
    id: genderLessId,
    inputName: 'gender',
    label: genderless,
    value: genderless,
  },
  {
    id: genderUnknownId,
    inputName: 'gender',
    label: genderunknown,
    value: genderunknown,
  },
];

export const radioFieldsArr = [
  { tittle: 'status', arr: radioFieldsStatusArr },
  { tittle: 'gender', arr: radioFieldsGenderArr },
];
export const inputs = ['name', 'status', 'gender'];
