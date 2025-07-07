import conf from '../conf/conf'
import { Client, ID, Databases, Storage, Query } from 'appwrite'

export class Service {
    client = new Client();
    database;
    bucket;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId) 

        this.bucket = new Storage(this.client)
        this.database = new Databases(this.client)
    }

    // to create a Post
    async createPost({ title, slug, content, featuredImage, status, userId }) {
        try {
            return await this.database.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                }
            )
        } catch (error) {
            console.log("Appwrite service :: createPost :: error", error);
        }
    }

    // To update a post
    async updatePost({ title, slug, content, featuredImage, status }) {
        try {
            return await this.database.updateDocument( 
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status
                }
            )
        } catch (error) {
            console.log("Appwrite service :: updatePost :: error", error);
            return false;
        }
    }

    // To delete a post
    async deletePost({ slug }) {
        try {
            return await this.database.deleteDocument( 
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
        } catch (error) {
            console.log("Appwrite service :: deletePost :: error", error);
            return false;
        }
    }

    // To get a single post
    async getPost({ slug }) {
        try {
            return await this.database.getDocument( 
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
        } catch (error) {
            console.log("Appwrite service :: getPost :: error", error);
            return false;
        }
    }

    // All Posts
    async getPosts({ queries = [Query.equal("status", "active")] }) {
        try {
            return await this.database.listDocuments(
                conf.appwriteDatabaseId, 
                conf.appwriteCollectionId,
                queries
            )
        } catch (error) {
            console.log("Appwrite service :: getPosts :: error", error);
            return false;
        }
    }

    // To upload files
    async uploadFiles(file) {
        try {
            return await this.bucket.createFile( 
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("Appwrite service :: uploadFiles :: error", error);
            return false
        }
    }

    // To delete a file
    async deleteFiles(file) {
        try {
            await this.bucket.deleteFile( 
                conf.appwriteBucketId,
                file
            )
            return true;
        } catch (error) {
            console.log("Appwrite service :: deleteFiles :: error", error);
            return false;
        }
    }

    getFilePreview(file) {
        return `${conf.appwriteUrl}/v1/storage/files/${file}/preview` 
    }
}

const service = new Service();
export default service; 

