import { challengeModal } from "../utils/utils.js";
export const config = {
    description: 'Submit a challenge'
};
export default (async (interaction)=>{
    const modal = await challengeModal();
    try {
        await interaction.showModal(modal.modal);
    } catch (error) {
        console.log(error);
    }
});
