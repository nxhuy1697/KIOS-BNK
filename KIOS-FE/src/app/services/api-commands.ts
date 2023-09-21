import { environment } from "src/environments/environment";



export class CommandURL {
    //USER
    public static LOGIN_USER = environment.PROCESS_SERVICE + "/Users/login";
    public static CREATE_USER = environment.PROCESS_SERVICE + "/Users/create";
    public static UPDATE_USER = environment.PROCESS_SERVICE + "/Users/update";
    public static DELETE_USER = environment.PROCESS_SERVICE + "/Users/delete";
    public static GET_USER = environment.PROCESS_SERVICE + "/Users/get";

    //TICKET
    public static CREATE_TICKET = environment.PROCESS_SERVICE + "/Ticket/create";
    public static GET_TICKET = environment.PROCESS_SERVICE + "/Ticket/get";
    public static UPDATE_TICKET = environment.PROCESS_SERVICE + "/Ticket/update";
    public static DELETE_TICKET = environment.PROCESS_SERVICE + "/Ticket/delete";

    //Screen
    public static GET_SCREEN = environment.PROCESS_SERVICE + "/Screen/get";
    public static CREATE_SCREEN = environment.PROCESS_SERVICE + "/Screen/create";
    public static UPDATE_SCREEN = environment.PROCESS_SERVICE + "/Screen/update";
    public static DELETE_SCREEN = environment.PROCESS_SERVICE + "/Screen/delete";

}