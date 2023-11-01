interface IMinifigsData {
  count: number;
  next: null | string;
  previous: null | string;
  results: IMinifig[];
}

interface IMinifig {
  last_modified_dt: string;
  name: string;
  num_parts: number;
  set_img_url: string;
  set_num: string;
  set_url: string;
}
