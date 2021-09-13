import { FetchPeopleQuery } from '@sovtech-swapi/data-access';
import { Maybe } from 'graphql/jsutils/Maybe';
import { ColumnConfig, KeyPress, MouseClick, Text } from 'grommet';

export const columns: ColumnConfig<RowType>[] = [
  {
    property: 'name',
    header: <Text>Character Name</Text>,
    primary: true,
  },
  {
    property: 'height',
    header: 'Height',
  },
  {
    property: 'mass',
    header: 'Mass',
  },
  {
    property: 'hair_color',
    header: 'Hair Color',
  },
  {
    property: 'skin_color',
    header: 'Skin Color',
  },
  {
    property: 'eye_color',
    header: 'Eye Color',
  },
  {
    property: 'birth_year',
    header: 'Birth Year',
  },
  {
    property: 'gender',
    header: 'Gender',
  },
];

export interface RowType {
  name: Maybe<string> | undefined;
  height: Maybe<string> | undefined;
  mass: Maybe<string> | undefined;
  hair_color: Maybe<string> | undefined;
  skin_color: Maybe<string> | undefined;
  eye_color: Maybe<string> | undefined;
  birth_year: Maybe<string> | undefined;
  gender: Maybe<string> | undefined;
}

export const initialRowType: RowType = {
  name: '',
  height: '',
  mass: '',
  hair_color: '',
  skin_color: '',
  eye_color: '',
  birth_year: '',
  gender: '',
};

export const DATA = (data: FetchPeopleQuery | undefined) => {
  let x: RowType = initialRowType;
  if (data) {
    const ret = data.fetchPeople?.people?.map((person, index) => {
      x = {
        name: person?.name,
        height: person?.height,
        mass: person?.mass,
        hair_color: person?.hair_color,
        skin_color: person?.skin_color,
        eye_color: person?.eye_color,
        birth_year: person?.birth_year,
        gender: person?.birth_year,
      };
      return x;
    });
    return ret;
  }
  return [x];
};
