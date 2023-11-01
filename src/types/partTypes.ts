interface IColor {
  id: number;
  is_trans: boolean;
  name: string;
  rgb: string;
}

interface IPart {
    external_ids: {
        BrickOwl: string[];
        BrickLink: string[];
        Lego: string[];
    };
    external_ids_alt: {
        BrickOwl: string[];
        BrickLink: string[];
        Lego: string[];
    };
    is_obsolete: boolean;
    name: string;
    part_cat_id: number;
    part_img_url: string;
    part_num: string;
    part_url: string;
}


interface IMinifigPart {
  color: IColor;
  element_id: string;
  id: number;
  inv_part_id: number;
  is_spare: boolean;
  part: IPart;
  num_sets: number;
  quantity: number;
  set_num: string;
}

interface IMinifigPartsData {
  count: number;
  next: null | string;
  previous: null | string;
  results: IMinifigPart[];
}
