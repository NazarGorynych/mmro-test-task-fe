export type InfoUser = {
  profile: Profile;
  wallet_amount: number;
  wallet_reserved_amount: number;
};

export type Profile = {
  name: string;
  email: string;
  avatar_url: any;
};
