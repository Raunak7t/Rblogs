import { Client, Databases, ID, Query, Storage } from "appwrite";
import conf from "../conf/conf";

export class DataService {
  client = new Client();
  databases;
  storage;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.databases = new Databases(this.client);
    this.storage = new Storage(this.client);
  }

  async addPost({ slug, title, image, content, userId, time, status }) {
    try {
      return await databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
        { title, image, content, userId, time, status }
      );
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  async updatePost(slug, { title, image, content, time, status }) {
    try {
      return await databases.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
        { title, image, content, time, status }
      );
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  async deletePost(slug) {
    try {
      await databases.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug
      );
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  async getPosts(queries = [Query.equal("status", "active")]) {
    try {
      return await this.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        queries
      );
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  async getPost(slug) {
    try {
      return await this.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug
      );
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  async uploadImage(file) {
    try {
      return await this.storage.createFile(
        conf.appwriteBucketId,
        ID.unique(),
        file
      );
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  getPrev(fileId) {
    try {
      return this.storage.getFilePreview(conf.appwriteBucketId, fileId).href;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  async updateImage(fileId) {
    try {
      return await this.storage.updateFile(conf.appwriteBucketId, fileId);
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  async deleteImage(fileId) {
    try {
      return await this.storage.deleteFile(conf.appwriteBucketId, fileId);
    } catch (error) {
      console.log(error);
      return false;
    }
  }
}

const dataService = new DataService();

export default dataService;
