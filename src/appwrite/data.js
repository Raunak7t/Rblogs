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

  async addPost({
    slug,
    title,
    image,
    content,
    userId,
    time,
    status,
    userName,
  }) {
    try {
      return await this.databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug.slice(0, 15) + ID.unique(),
        { slug, title, image, content, userId, time, status, userName }
      );
    } catch (error) {
      throw error;
    }
  }

  async updatePost(id, { title, slug, image, content, time, status }) {
    try {
      return await this.databases.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        id,
        { title, slug, image, content, time, status }
      );
    } catch (error) {
      throw error;
    }
  }

  async deletePost(slug) {
    try {
      await this.databases.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug
      );
      return true;
    } catch (error) {
      throw error;
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
      throw error;
    }
  }

  async getPost(id) {
    try {
      return await this.databases.getDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        id
      );
    } catch (error) {
      throw error;
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
      throw error;
    }
  }

  getPrev(fileId) {
    try {
      return this.storage.getFilePreview(conf.appwriteBucketId, fileId).href;
    } catch (error) {
      throw error;
    }
  }

  async updateImage(fileId) {
    try {
      return await this.storage.updateFile(conf.appwriteBucketId, fileId);
    } catch (error) {
      throw error;
    }
  }

  async deleteImage(fileId) {
    try {
      return await this.storage.deleteFile(conf.appwriteBucketId, fileId);
    } catch (error) {
      throw error;
    }
  }
}

const dataService = new DataService();

export default dataService;
