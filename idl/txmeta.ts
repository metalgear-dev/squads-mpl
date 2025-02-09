export type Txmeta = {
  "version": "0.1.0",
  "name": "txmeta",
  "instructions": [
    {
      "name": "trackMeta",
      "accounts": [
        {
          "name": "member",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "meta",
          "type": "string"
        }
      ]
    }
  ]
};

export const IDL: Txmeta = {
  "version": "0.1.0",
  "name": "txmeta",
  "instructions": [
    {
      "name": "trackMeta",
      "accounts": [
        {
          "name": "member",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "meta",
          "type": "string"
        }
      ]
    }
  ]
};
