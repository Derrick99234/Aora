import { Account, Client, ID } from 'react-native-appwrite';

export const config = {
    endpoint: "https://cloud.appwrite.io/v1",
    platform: "com.deritech.aora",
    projectId: "6755dfc10016fd0c0a6e",
    storageId: "6755e7440010d1c118f1",
    databaseId: "6755e2c6003377f2d414",
    userCollectionId: "6755e2f8000853ed3946",
    videoCollectionId: "6755e426001ddc4b907a",
  };

// Init your React Native SDK
const client = new Client();

client
    .setEndpoint(config.endpoint)
    .setProject(config.projectId)
    .setPlatform(config.platform)
;

export const createUser = () => {
  const account = new Account(client);
  
  // Register User
  account.create(ID.unique(), 'me@example.com', 'password', 'Jane Doe')
      .then(function (response) {
          console.log(response);
      }, function (error) {
          console.log(error);
      });

}
