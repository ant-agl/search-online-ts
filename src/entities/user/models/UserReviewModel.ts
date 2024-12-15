export interface UserReviewModel {
  byStart: Array<UserReviewByStars>;
  value: Array<UserReviewResult>;
  isHidden: UserReviewMeta;
}

export interface UserReviewByStars {
  star: number;
  quantity: number;
}

export interface UserReviewResult {
  user: UserReviewResultUser;
  stars: string;
  text: string;
  created_at: string;
}

export interface UserReviewResultUser {
  id: number;
  fullName: string;
  city: string;
  avatar: string;
}

export interface UserReviewMeta {
  page: number;
  totalItems: number;
  totalPages: number;
  itemsPerPage: number;
}
