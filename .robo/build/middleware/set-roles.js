import { Flashcore } from "@roboplay/robo.js";
import { ROLES } from "../common/globals.js";
export default async function() {
    console.log('Running middleware . . . ');
    const choices = [];
    const existingRolesFlashcore = await Flashcore.get('challenges-admin-roles');
    console.log('existingRolesFlashcore', existingRolesFlashcore);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxQcm9qZWt0aVxcZGlzY29yZC1ib3RzXFxyb2JvLXBsdWdpbnNcXGNvbW11bml0eS1jaGFsbGVuZ2VzXFxzcmNcXG1pZGRsZXdhcmVcXHNldC1yb2xlcy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGbGFzaGNvcmUgfSBmcm9tICdAcm9ib3BsYXkvcm9iby5qcyc7XHJcbmltcG9ydCB7IFJPTEVTIH0gZnJvbSAnLi4vY29tbW9uL2dsb2JhbHMuanMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gKCkge1xyXG4gIGNvbnNvbGUubG9nKCdSdW5uaW5nIG1pZGRsZXdhcmUgLiAuIC4gJylcclxuICBjb25zdCBjaG9pY2VzOiBhbnkgPSBbXTtcclxuICBjb25zdCBleGlzdGluZ1JvbGVzRmxhc2hjb3JlID0gYXdhaXQgRmxhc2hjb3JlLmdldCgnY2hhbGxlbmdlcy1hZG1pbi1yb2xlcycpIGFzIHN0cmluZztcclxuICBjb25zb2xlLmxvZygnZXhpc3RpbmdSb2xlc0ZsYXNoY29yZScsIGV4aXN0aW5nUm9sZXNGbGFzaGNvcmUpXHJcbiAgY29uc3QgZXhpc3RpbmdSb2xlcyA9IGV4aXN0aW5nUm9sZXNGbGFzaGNvcmUgPyBKU09OLnBhcnNlKGV4aXN0aW5nUm9sZXNGbGFzaGNvcmUpIDogW107XHJcbiAgZXhpc3RpbmdSb2xlcyAmJiBcclxuICAgIGV4aXN0aW5nUm9sZXMubWFwKChyb2xlOiBhbnkpID0+IHtcclxuICAgICAgaWYgKHR5cGVvZiByb2xlID09PSAnb2JqZWN0JyAmJiAnbmFtZScgaW4gcm9sZSAmJiAndmFsdWUnIGluIHJvbGUpIHtcclxuICAgICAgICBjaG9pY2VzLnB1c2goe1xyXG4gICAgICAgICAgbmFtZTogcm9sZS5uYW1lLFxyXG4gICAgICAgICAgdmFsdWU6IHJvbGUuaWQsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIFxyXG4gIGlmIChST0xFUy5yb2xlcy5sZW5ndGggPT09IDApIHtcclxuICAgIFJPTEVTLnJvbGVzID0gY2hvaWNlcztcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbIkZsYXNoY29yZSIsIlJPTEVTIiwiY29uc29sZSIsImxvZyIsImNob2ljZXMiLCJleGlzdGluZ1JvbGVzRmxhc2hjb3JlIiwiZ2V0IiwiZXhpc3RpbmdSb2xlcyIsIkpTT04iLCJwYXJzZSIsIm1hcCIsInJvbGUiLCJwdXNoIiwibmFtZSIsInZhbHVlIiwiaWQiLCJyb2xlcyIsImxlbmd0aCJdLCJtYXBwaW5ncyI6IkFBQUEsU0FBU0EsU0FBUyxRQUFRLG9CQUFvQjtBQUM5QyxTQUFTQyxLQUFLLFFBQVEsdUJBQXVCO0FBRTdDLGVBQWU7SUFDYkMsUUFBUUMsR0FBRyxDQUFDO0lBQ1osTUFBTUMsVUFBZSxFQUFFO0lBQ3ZCLE1BQU1DLHlCQUF5QixNQUFNTCxVQUFVTSxHQUFHLENBQUM7SUFDbkRKLFFBQVFDLEdBQUcsQ0FBQywwQkFBMEJFO0lBQ3RDLE1BQU1FLGdCQUFnQkYseUJBQXlCRyxLQUFLQyxLQUFLLENBQUNKLDBCQUEwQixFQUFFO0lBQ3RGRSxpQkFDRUEsY0FBY0csR0FBRyxDQUFDLENBQUNDO1FBQ2pCLElBQUksT0FBT0EsU0FBUyxZQUFZLFVBQVVBLFFBQVEsV0FBV0EsTUFBTTtZQUNqRVAsUUFBUVEsSUFBSSxDQUFDO2dCQUNYQyxNQUFNRixLQUFLRSxJQUFJO2dCQUNmQyxPQUFPSCxLQUFLSSxFQUFFO1lBQ2hCO1FBQ0Y7SUFDRjtJQUVGLElBQUlkLE1BQU1lLEtBQUssQ0FBQ0MsTUFBTSxLQUFLLEdBQUc7UUFDNUJoQixNQUFNZSxLQUFLLEdBQUdaO0lBQ2hCO0FBQ0YifQ==