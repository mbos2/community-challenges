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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxQcm9qZWt0aVxcZGlzY29yZC1ib3RzXFxyb2JvLXBsdWdpbnNcXHJvYm8tcGx1Z2luLWNoYWxsZW5nZXNcXHNyY1xcbWlkZGxld2FyZVxcc2V0LXJvbGVzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZsYXNoY29yZSB9IGZyb20gJ0Byb2JvcGxheS9yb2JvLmpzJztcclxuaW1wb3J0IHsgUk9MRVMgfSBmcm9tICcuLi9jb21tb24vZ2xvYmFscy5qcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiAoKSB7XHJcbiAgY29uc3QgY2hvaWNlczogYW55ID0gW107XHJcbiAgY29uc3QgZXhpc3RpbmdSb2xlc0ZsYXNoY29yZSA9IGF3YWl0IEZsYXNoY29yZS5nZXQoJ2NoYWxsZW5nZXMtYWRtaW4tcm9sZXMnKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgZXhpc3RpbmdSb2xlcyA9IGV4aXN0aW5nUm9sZXNGbGFzaGNvcmUgPyBKU09OLnBhcnNlKGV4aXN0aW5nUm9sZXNGbGFzaGNvcmUpIDogW107XHJcbiAgZXhpc3RpbmdSb2xlcyAmJiBcclxuICAgIGV4aXN0aW5nUm9sZXMubWFwKChyb2xlOiBhbnkpID0+IHtcclxuICAgICAgaWYgKHR5cGVvZiByb2xlID09PSAnb2JqZWN0JyAmJiAnbmFtZScgaW4gcm9sZSAmJiAndmFsdWUnIGluIHJvbGUpIHtcclxuICAgICAgICBjaG9pY2VzLnB1c2goe1xyXG4gICAgICAgICAgbmFtZTogcm9sZS5uYW1lLFxyXG4gICAgICAgICAgdmFsdWU6IHJvbGUuaWQsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIFxyXG4gIGlmIChST0xFUy5yb2xlcy5sZW5ndGggPT09IDApIHtcclxuICAgIFJPTEVTLnJvbGVzID0gY2hvaWNlcztcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbIkZsYXNoY29yZSIsIlJPTEVTIiwiY2hvaWNlcyIsImV4aXN0aW5nUm9sZXNGbGFzaGNvcmUiLCJnZXQiLCJleGlzdGluZ1JvbGVzIiwiSlNPTiIsInBhcnNlIiwibWFwIiwicm9sZSIsInB1c2giLCJuYW1lIiwidmFsdWUiLCJpZCIsInJvbGVzIiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiQUFBQSxTQUFTQSxTQUFTLFFBQVEsb0JBQW9CO0FBQzlDLFNBQVNDLEtBQUssUUFBUSx1QkFBdUI7QUFFN0MsZUFBZTtJQUNiLE1BQU1DLFVBQWUsRUFBRTtJQUN2QixNQUFNQyx5QkFBeUIsTUFBTUgsVUFBVUksR0FBRyxDQUFDO0lBQ25ELE1BQU1DLGdCQUFnQkYseUJBQXlCRyxLQUFLQyxLQUFLLENBQUNKLDBCQUEwQixFQUFFO0lBQ3RGRSxpQkFDRUEsY0FBY0csR0FBRyxDQUFDLENBQUNDO1FBQ2pCLElBQUksT0FBT0EsU0FBUyxZQUFZLFVBQVVBLFFBQVEsV0FBV0EsTUFBTTtZQUNqRVAsUUFBUVEsSUFBSSxDQUFDO2dCQUNYQyxNQUFNRixLQUFLRSxJQUFJO2dCQUNmQyxPQUFPSCxLQUFLSSxFQUFFO1lBQ2hCO1FBQ0Y7SUFDRjtJQUVGLElBQUlaLE1BQU1hLEtBQUssQ0FBQ0MsTUFBTSxLQUFLLEdBQUc7UUFDNUJkLE1BQU1hLEtBQUssR0FBR1o7SUFDaEI7QUFDRiJ9