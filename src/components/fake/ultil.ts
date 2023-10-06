import { faker } from "@faker-js/faker";

export enum CONSTANT_TYPE_VALUE {
  STRING = "STRING",
  NUMBER = "NUMBER",
  IMG = "IMG",
  ARRAY = "ARRAY",
  NAME = "NAME",
  NONE = "NONE"
}

export interface IProperty {
  type: CONSTANT_TYPE_VALUE;
  number?: number;
  data?: IProperty;
}

const generateData = (data) => {
  let dataGenerated = {};
  for (const [key, value] of Object.entries(data)) {
    if (key && value) {
      dataGenerated[key] = handleData(value);
    }
  }
  return JSON.stringify(dataGenerated, null, 4);
};

const handleData = (value) => {
  let data;
  switch (value.type) {
    case CONSTANT_TYPE_VALUE.STRING: {
      data = faker.string.uuid();
      break;
    }
    case CONSTANT_TYPE_VALUE.NAME: {
      data = faker.internet.userName();
      break;
    }
    case CONSTANT_TYPE_VALUE.NUMBER: {
      data = faker.phone.number();
      break;
    }
    case CONSTANT_TYPE_VALUE.IMG: {
      data = faker.image.avatar();
      break;
    }
    case CONSTANT_TYPE_VALUE.ARRAY: {
      const arrayData: IProperty[] = [];
      let itemData: IProperty;
      for (let i = 0; i < value.number; i++) {
        itemData = JSON.parse(generateData(value.data));
        arrayData.push(itemData);
      }
      data = [...arrayData];
      break;
    }
    default:
      data = faker.string.uuid();
      break;
  }
  return data;
};
