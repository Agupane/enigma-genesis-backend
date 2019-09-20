Getting Started
---------------

```sh
# clone it

# Install dependencies
yarn install

# Start development live-reload server
PORT=8080 yarn run dev

# Start production server:
PORT=8080 yarn start
```

APIS
-----
#### Computations API example: 
- `http://localhost:8080/api/computations`
```
[
    {
        "_id": "0xfc8a4d0eef0a61b9ba28325bb5caeb20be76883ce82a52b98c8a88c243258cc3",
        "sentOn": "2019-09-19T13:43:32.945Z",
        "transactionHash": "0xb82b4836948c97a57f0611ee02ca92129727ce1b567968e28e9ad2284d654cda",
        "scAddr": "0x88987af7d35eabcad95915b93bfd3d2bc3308f06b7197478b0dfca268f0497dc",
        "msgId": "SoNQg6AXJ9Nr",
        "nonce": "6",
        "sender": "0x90F8bf6A479f320ead074411a4B0e7944Ea8c9C1",
        "workerAddress": "3a85a92726fc861968ecc1e7eae78ef072872d39",
        "taskRecordGasUsed": "179309",
        "taskRecordBlockNumber": 70,
        "completedOn": "2019-09-19T13:43:34.051Z",
        "factorsFound": 12,
        "status": "Completed"
    },
    {
        "_id": "0x446e739babcd90ddd7f466a78961ca31fa411e14de57f81b359f3cd5d61ecf43",
        "sentOn": "2019-09-19T13:43:34.305Z",
        "transactionHash": "0x67115819574d6854269de55864aaaef6dea476d287f87e2749cfb5cdb53a6bdb",
        "scAddr": "0x88987af7d35eabcad95915b93bfd3d2bc3308f06b7197478b0dfca268f0497dc",
        "msgId": "kgEcI6AiFOaW",
        "nonce": "7",
        "sender": "0x90F8bf6A479f320ead074411a4B0e7944Ea8c9C1",
        "workerAddress": "3a85a92726fc861968ecc1e7eae78ef072872d39",
        "taskRecordGasUsed": "179309",
        "taskRecordBlockNumber": 73,
        "completedOn": "2019-09-19T13:43:35.358Z",
        "factorsFound": 12,
        "status": "Completed"
    },
]
```
- `http://localhost:8080/api/computations/pages/?page=1&rowsPerPage=2&order=asc&orderBy=sentOn`
```
{
    "totalRows": 443,
    "results": [
        {
            "_id": "0x0a8cd297794b71ba053f92ba93b23eadf06ce7000349e00a50a3ba5522758420",
            "sentOn": "2019-09-19T13:43:35.559Z",
            "transactionHash": "0xce2a79e6f8868a58edcadcfb85db1876a6405213208004fcc7ea38d8ceeb9bce",
            "scAddr": "0x88987af7d35eabcad95915b93bfd3d2bc3308f06b7197478b0dfca268f0497dc",
            "msgId": "ltHxI6T4iN8v",
            "nonce": "8",
            "sender": "0x90F8bf6A479f320ead074411a4B0e7944Ea8c9C1",
            "workerAddress": "3a85a92726fc861968ecc1e7eae78ef072872d39",
            "taskRecordGasUsed": "179309",
            "taskRecordBlockNumber": 76,
            "completedOn": "2019-09-19T13:43:36.619Z",
            "factorsFound": 12,
            "status": "Completed"
        },
        {
            "_id": "0x0649f85d54b4d8ee9a071dd8c9283cabdbd2f560549ce50c39d14d8b343cc9af",
            "sentOn": "2019-09-19T13:43:37.122Z",
            "transactionHash": "0xf22facd4e3cb0624dcc7cdd348c06e3dc0f2701ece57cdbc4e220679ddf2b829",
            "scAddr": "0x88987af7d35eabcad95915b93bfd3d2bc3308f06b7197478b0dfca268f0497dc",
            "msgId": "BvQz415zVdZ3",
            "nonce": "9",
            "sender": "0x90F8bf6A479f320ead074411a4B0e7944Ea8c9C1",
            "workerAddress": "3a85a92726fc861968ecc1e7eae78ef072872d39",
            "taskRecordGasUsed": "179309",
            "taskRecordBlockNumber": 79,
            "completedOn": "2019-09-19T13:43:40.206Z",
            "factorsFound": 12,
            "status": "Completed"
        }
    ]
}
```
- `http://localhost:8080/api/computations/workers/pages/?page=0&rowsPerPage=2&order=asc&orderBy=taskRecordBlockNumber&workerAddress=3a85a92726fc861968ecc1e7eae78ef072872d39`
```
{
    "totalRows": 443,
    "results": [
        {
            "_id": "0xfc8a4d0eef0a61b9ba28325bb5caeb20be76883ce82a52b98c8a88c243258cc3",
            "sentOn": "2019-09-19T13:43:32.945Z",
            "transactionHash": "0xb82b4836948c97a57f0611ee02ca92129727ce1b567968e28e9ad2284d654cda",
            "scAddr": "0x88987af7d35eabcad95915b93bfd3d2bc3308f06b7197478b0dfca268f0497dc",
            "msgId": "SoNQg6AXJ9Nr",
            "nonce": "6",
            "sender": "0x90F8bf6A479f320ead074411a4B0e7944Ea8c9C1",
            "workerAddress": "3a85a92726fc861968ecc1e7eae78ef072872d39",
            "taskRecordGasUsed": "179309",
            "taskRecordBlockNumber": 70,
            "completedOn": "2019-09-19T13:43:34.051Z",
            "factorsFound": 12,
            "status": "Completed"
        },
        {
            "_id": "0x446e739babcd90ddd7f466a78961ca31fa411e14de57f81b359f3cd5d61ecf43",
            "sentOn": "2019-09-19T13:43:34.305Z",
            "transactionHash": "0x67115819574d6854269de55864aaaef6dea476d287f87e2749cfb5cdb53a6bdb",
            "scAddr": "0x88987af7d35eabcad95915b93bfd3d2bc3308f06b7197478b0dfca268f0497dc",
            "msgId": "kgEcI6AiFOaW",
            "nonce": "7",
            "sender": "0x90F8bf6A479f320ead074411a4B0e7944Ea8c9C1",
            "workerAddress": "3a85a92726fc861968ecc1e7eae78ef072872d39",
            "taskRecordGasUsed": "179309",
            "taskRecordBlockNumber": 73,
            "completedOn": "2019-09-19T13:43:35.358Z",
            "factorsFound": 12,
            "status": "Completed"
        }
    ]
}
```
#### Workers API example: 
- `http://localhost:8080/api/workers`
```
[
    {
        "ethAddress": "0x90F8bf6A479f320ead074411a4B0e7944Ea8c9C1",
        "avgResponseTime": 1209.762443438914,
        "failedComputations": 0,
        "sucessfulComputations": 442,
        "percentSuccessfulComputations": 100,
        "totalComputations": 442,
        "workerAddress": "3a85a92726fc861968ecc1e7eae78ef072872d39"
    },
    {
        "ethAddress": "0x90F8bf6A479f320ead074411a4B0e7944Ea8c9C1",
        "avgResponseTime": null,
        "failedComputations": 1,
        "sucessfulComputations": 0,
        "percentSuccessfulComputations": 0,
        "totalComputations": 1,
        "workerAddress": "8016323055b36302d50a8bc6f71f32865ebe4272"
    }
]
```

#### Task details API example: 
- `http://localhost:8080/api/taskDetails/0xfc8a4d0eef0a61b9ba28325bb5caeb20be76883ce82a52b98c8a88c243258cc3`
```
{
    "_id": "0xfc8a4d0eef0a61b9ba28325bb5caeb20be76883ce82a52b98c8a88c243258cc3",
    "sentOn": "2019-09-19T13:43:32.945Z",
    "transactionHash": "0xb82b4836948c97a57f0611ee02ca92129727ce1b567968e28e9ad2284d654cda",
    "scAddr": "0x88987af7d35eabcad95915b93bfd3d2bc3308f06b7197478b0dfca268f0497dc",
    "msgId": "SoNQg6AXJ9Nr",
    "nonce": "6",
    "sender": "0x90F8bf6A479f320ead074411a4B0e7944Ea8c9C1",
    "workerAddress": "3a85a92726fc861968ecc1e7eae78ef072872d39",
    "taskRecordGasUsed": "179309",
    "taskRecordBlockNumber": 70,
    "completedOn": "2019-09-19T13:43:34.051Z",
    "factorsFound": 12
}
```

License
-------

MIT
