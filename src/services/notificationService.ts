import Notification from "../schemas/notification";

class NotificationService {
    async fetchOneNotification(id: any) {
        return await Notification.findById(id);
    }

    async fetchAllNotifications() {
        return await Notification.find();
    }

    async createNotification(body: any) {
        const notification = new Notification(body);
        return await notification.save();
    }
}

export default NotificationService;
