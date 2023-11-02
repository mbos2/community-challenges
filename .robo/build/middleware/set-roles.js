import { Flashcore } from "@roboplay/robo.js";
import { ROLES } from "../common/globals.js";
export default async function() {
    const choices = [];
    const existingRolesFlashcore = await Flashcore.get('challenges-admin-roles');
    const existingRoles = existingRolesFlashcore ? JSON.parse(existingRolesFlashcore) : [];
    existingRoles && existingRoles.map((role)=>{
        if (typeof role === 'object' && 'name' in role && 'value' in role) {
            choices.push({
                name: role.name,
                value: role.id
            });
        }
    });
    if (ROLES.roles.length === 0) {
        ROLES.roles = choices;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxQcm9qZWt0aVxcZGlzY29yZC1ib3RzXFxyb2JvLXBsdWdpbnNcXGNvbW11bml0eS1jaGFsbGVuZ2VzXFxzcmNcXG1pZGRsZXdhcmVcXHNldC1yb2xlcy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGbGFzaGNvcmUgfSBmcm9tICdAcm9ib3BsYXkvcm9iby5qcyc7XHJcbmltcG9ydCB7IFJPTEVTIH0gZnJvbSAnLi4vY29tbW9uL2dsb2JhbHMuanMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gKCkge1xyXG4gIGNvbnN0IGNob2ljZXM6IGFueSA9IFtdO1xyXG4gIGNvbnN0IGV4aXN0aW5nUm9sZXNGbGFzaGNvcmUgPSBhd2FpdCBGbGFzaGNvcmUuZ2V0KCdjaGFsbGVuZ2VzLWFkbWluLXJvbGVzJykgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IGV4aXN0aW5nUm9sZXMgPSBleGlzdGluZ1JvbGVzRmxhc2hjb3JlID8gSlNPTi5wYXJzZShleGlzdGluZ1JvbGVzRmxhc2hjb3JlKSA6IFtdO1xyXG4gIGV4aXN0aW5nUm9sZXMgJiYgXHJcbiAgICBleGlzdGluZ1JvbGVzLm1hcCgocm9sZTogYW55KSA9PiB7XHJcbiAgICAgIGlmICh0eXBlb2Ygcm9sZSA9PT0gJ29iamVjdCcgJiYgJ25hbWUnIGluIHJvbGUgJiYgJ3ZhbHVlJyBpbiByb2xlKSB7XHJcbiAgICAgICAgY2hvaWNlcy5wdXNoKHtcclxuICAgICAgICAgIG5hbWU6IHJvbGUubmFtZSxcclxuICAgICAgICAgIHZhbHVlOiByb2xlLmlkLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICBcclxuICBpZiAoUk9MRVMucm9sZXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICBST0xFUy5yb2xlcyA9IGNob2ljZXM7XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJGbGFzaGNvcmUiLCJST0xFUyIsImNob2ljZXMiLCJleGlzdGluZ1JvbGVzRmxhc2hjb3JlIiwiZ2V0IiwiZXhpc3RpbmdSb2xlcyIsIkpTT04iLCJwYXJzZSIsIm1hcCIsInJvbGUiLCJwdXNoIiwibmFtZSIsInZhbHVlIiwiaWQiLCJyb2xlcyIsImxlbmd0aCJdLCJtYXBwaW5ncyI6IkFBQUEsU0FBU0EsU0FBUyxRQUFRLG9CQUFvQjtBQUM5QyxTQUFTQyxLQUFLLFFBQVEsdUJBQXVCO0FBRTdDLGVBQWU7SUFDYixNQUFNQyxVQUFlLEVBQUU7SUFDdkIsTUFBTUMseUJBQXlCLE1BQU1ILFVBQVVJLEdBQUcsQ0FBQztJQUNuRCxNQUFNQyxnQkFBZ0JGLHlCQUF5QkcsS0FBS0MsS0FBSyxDQUFDSiwwQkFBMEIsRUFBRTtJQUN0RkUsaUJBQ0VBLGNBQWNHLEdBQUcsQ0FBQyxDQUFDQztRQUNqQixJQUFJLE9BQU9BLFNBQVMsWUFBWSxVQUFVQSxRQUFRLFdBQVdBLE1BQU07WUFDakVQLFFBQVFRLElBQUksQ0FBQztnQkFDWEMsTUFBTUYsS0FBS0UsSUFBSTtnQkFDZkMsT0FBT0gsS0FBS0ksRUFBRTtZQUNoQjtRQUNGO0lBQ0Y7SUFFRixJQUFJWixNQUFNYSxLQUFLLENBQUNDLE1BQU0sS0FBSyxHQUFHO1FBQzVCZCxNQUFNYSxLQUFLLEdBQUdaO0lBQ2hCO0FBQ0YifQ==