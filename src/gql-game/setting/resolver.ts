import { MysqDB } from '../../common/sequelize';

export class Setting {

    static mysql = (tName) => new MysqDB(tName);

    constructor() {

    }

    static Query = {
        getVersionById(_, { id }, context) {
            if (!context.user) return null;

            return Setting.mysql("t_client_version").findById(id);
        },

        getNewsById(_, { id }, context) {
            if (!context.user) return null;

            return Setting.mysql("t_news").findById(id);
        },

        getNoticeById(_, { id }, context) {
            if (!context.user) return null;

            return Setting.mysql("t_notice").findById(id);
        },

        getTipById(_, { id }, context) {
            if (!context.user) return null;

            return Setting.mysql("t_tip").findById(id);
        }

    }

    static Mutation = {
        updateVersion(_, { id, version }, context) {
            if (!context.user) return null;

            return Setting.mysql("t_client_version").update(version, id);
        },
        updateNews(_, { id, news }, context) {
            if (!context.user) return null;

            return Setting.mysql("t_news").update(news, id);
        },
        updateNotice(_, { id, notice }, context) {
            if (!context.user) return null;

            return Setting.mysql("t_notice").update(notice, id);
        },
        updateTip(_, { id, tip }, context) {
            if (!context.user) return null;

            return Setting.mysql("t_tip").update(tip, id);
        }
    }
}
